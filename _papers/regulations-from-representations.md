---
title: "How Can Algorithmic Audits Compare Less Discriminatory Alternatives?"
description: "Background on disparate impact, modern predictive systems, and a submitted proposal for documenting tradeoffs before deployment."
paper_title: "Regulations from Representations: Information Geometry as a Framework for Less Discriminatory Algorithms"
paper_status: "Submitted"
disclosure_class: "submitted"
research_order: 4
card_action_label: "Read the explainer"
tags: [algorithmic fairness, employment law, information geometry]
---
An employment rule can be written in neutral terms and still burden groups differently. United States employment discrimination law recognizes this through the doctrine of disparate impact. Under Title VII, a selection practice that produces a significant adverse impact may require justification as job-related and consistent with business necessity. Even then, the availability of a less discriminatory alternative can matter.

This legal structure creates a comparison problem. It asks whether another practice could serve the employer's legitimate need while reducing discriminatory effects. For a conventional test or screening rule, alternatives may be concrete enough to identify and evaluate. A modern predictive model complicates the picture because it can encode thousands or millions of interacting parameters.

Transformer models make the difficulty especially vivid. These systems learn distributed representations, meaning that a concept is generally expressed through patterns across many internal coordinates rather than stored in one clearly labeled location. The model's behavior can change when its representation is altered, but a change intended to reduce one disparity may also affect accuracy or disrupt other useful distinctions.

Auditing adds another layer. A post-deployment audit can reveal patterns after a system has already influenced decisions. A pre-deployment audit instead asks developers and decision-makers to document expected behavior before use. This can make assumptions and tradeoffs visible at a point when changing the system is still possible.

The submitted paper, written with a collaborator, connects this audit problem to the legal idea of less discriminatory alternatives. Its abstract proposes an "LDA frontier," a conditional pre-deployment audit artifact. At a high level, the frontier records relationships among predictive accuracy, measured disparity, and disruption away from the intended target as a target concept is varied.

A frontier is a useful form of evidence because it replaces a single performance number with a structured comparison. In many technical fields, a frontier marks options for which improving one objective requires giving up something on another. Displaying such tradeoffs does not decide which option should be chosen. It can, however, show whether a claimed constraint is fixed or whether alternative configurations deserve consideration.

The word "conditional" is important. Any audit result depends on prior choices: the task definition, dataset, affected population, protected groups, performance measure, disparity measure, and acceptable forms of change. The artifact described in the abstract should therefore be read within specified conditions rather than as a universal certificate.

Information geometry supplies the paper's broad mathematical setting. It studies spaces of probability distributions using geometric concepts. For learned representations, a geometric view can provide language for comparing changes in model behavior and for tracing tradeoffs across a family of alternatives. The submitted work argues at the abstract level that this structure may help turn the less-discriminatory-alternative concept into usable compliance infrastructure for transformer systems.

That claim remains carefully bounded. A technical artifact cannot determine legal compliance on its own. Law depends on facts, institutional responsibilities, burdens of proof, and judicial interpretation. Nor can a frontier settle which harms count, whose interests should receive priority, or whether an automated system should be deployed at all.

Its potential contribution is narrower and practical: organizing evidence about available alternatives before a high-stakes model is used. Such evidence could support clearer conversations among developers, employers, auditors, lawyers, and affected people. It could also make it harder to present a single model configuration as inevitable when nearby alternatives have meaningfully different consequences.

The larger research question concerns the relationship between representations and regulation. Modern models operate through internal structures that are difficult to inspect, while legal standards require comparisons that can be explained and contested. Building a credible bridge between the two requires mathematical care, legal humility, and documentation that exposes assumptions instead of concealing them.
