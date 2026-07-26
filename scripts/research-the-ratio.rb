#!/usr/bin/env ruby
# frozen_string_literal: true

ROOT = File.expand_path("..", __dir__)
WORD = /[A-Za-z]+(?:['-][A-Za-z]+)*/

def measure(text)
  plain = text
          .gsub(/\[([^\]]+)\]\([^)]+\)/, '\1')
          .gsub(/\{\{.*?\}\}/m, " ")
          .gsub(/<[^>]+>/, " ")
          .gsub(/[*_#]/, " ")
  words = plain.scan(WORD)
  [plain.downcase.scan("the").length, words.length]
end

blurbs = Dir[File.join(ROOT, "_papers", "*.md")].map do |path|
  source = File.read(path)
  title = source[/\Atitle:\s*"([^"]+)"/, 1] || source[/^title:\s*"([^"]+)"/, 1]
  status = source[/^paper_status:\s*"([^"]+)"/, 1]
  order = source[/^research_order:\s*(\d+)/, 1].to_i
  body = source.sub(/\A---.*?---\s*/m, "")
  [order, "#{status} guide", title, *measure(body)]
end.sort_by(&:first).map { |_, *blurb| blurb }

landing = File.read(File.join(ROOT, "research.md"))
landing.scan(/<article class="research-entry research-entry--(manuscript|question)"[^>]*>(.*?)<\/article>/m) do |kind, body|
  title = body[/<h3>(.*?)<\/h3>/m, 1]
  copy = body.sub(/.*?<\/h3>/m, "").gsub(/<p class="research-entry__status">.*?<\/p>/m, "")
  blurbs << [kind.capitalize, title, *measure(copy)]
end

puts format("%-16s %-70s %7s %7s %9s", "Type", "Blurb", '"the"', "Words", "Ratio")
blurbs.each do |type, title, the_count, total|
  puts format("%-16s %-70s %7d %7d %8.2f%%", type, title, the_count, total, 100.0 * the_count / total)
end
