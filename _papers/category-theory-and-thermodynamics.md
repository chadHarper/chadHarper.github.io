---
title: "How to Apply Category Theory to Thermodynamics"
description: "An accessible guide to compositional thermostatics, entropy, and the role of category theory in describing systems with boundaries."
paper_title: "How to Apply Category Theory to Thermodynamics"
paper_status: "Published"
disclosure_class: "published"
research_order: 1
display_date: 2022-07-25
paper_url: "https://golem.ph.utexas.edu/category/2022/07/how_to_apply_category_theory_t.html"
paper_action_label: "Read the public post"
card_action_label: "Read the explainer"
tags: [category theory, thermodynamics, applied mathematics]
---
Thermodynamics began with engines. Nineteenth-century physicists wanted to understand how heat could be converted into work, and why every real engine loses some of its capacity to perform that conversion. The resulting theory introduced quantities such as temperature, energy, and entropy. It also revealed an unusual strength: thermodynamics can describe a system without tracking every molecule inside it.

That economy is essential. A cup of water contains an astronomical number of molecules, each moving and colliding. Following all of them would be impossible, and usually unhelpful. Thermodynamics replaces that microscopic description with a small set of macroscopic variables. It tells us which states are possible, how states are related, and what constraints any transformation must obey.

Yet one basic task remains surprisingly subtle. Scientists and engineers routinely assemble systems from parts. A heat engine contains reservoirs, pistons, and working fluids. A chemical process joins reaction vessels through pipes. If each component has a thermodynamic description, how should those descriptions combine into a description of the whole?

This is where category theory enters. Category theory is a branch of mathematics concerned with structures and the relationships among them. Its language can feel abstract because it shifts attention away from what an object is made of and toward how objects connect. That shift is useful when composition itself is the subject.

A category contains objects and arrows between them. An arrow can represent a function, a process, or a transformation, depending on the setting. The crucial operation is composition: when one arrow ends where another begins, they can be joined. Categories also require composition to be associative, so a chain of compatible processes has a consistent result regardless of how we group the intermediate steps.

Those simple rules capture a discipline that is easy to lose in ordinary mathematical notation. If we claim to understand a large system by understanding its parts, then connecting the parts should be a well-defined operation. The description assigned to the composite should agree with the descriptions assigned to its components.

In *Compositional Thermostatics*, John Baez, Owen Lynch, and Joe Moeller develop this perspective for equilibrium thermodynamics. Thermostatics concerns equilibrium states, where macroscopic quantities have settled into stable relationships. The framework treats systems as open: they have boundaries through which relevant quantities can be related to an environment or to another system.

An open-system viewpoint changes the unit of analysis. A closed object can be studied in isolation, while an open object is partly characterized by its interface. The interface records how the object may connect to something else. Two systems can then be composed by identifying compatible boundary variables. Internal details of the connection recede, and the composite acquires a new external boundary.

This resembles familiar practices in engineering. A circuit component may be represented by its terminals and the relationships among voltages and currents there. Once components are wired together, the joined terminals become internal and the remaining terminals describe the larger circuit. The category-theoretic goal is to make an analogous compositional logic precise for thermodynamic systems.

Entropy plays a central role. In equilibrium thermodynamics, entropy helps characterize which macroscopic states a system can occupy and how combined systems settle. When systems are joined, their variables must satisfy compatibility conditions. A compositional framework tracks how the relevant state spaces and entropy functions behave under those identifications.

The payoff is conceptual as well as technical. Classical presentations of thermodynamics often begin with a list of variables and laws, then apply them case by case. A compositional treatment asks which mathematical structures make the laws compatible with assembly. That question separates reusable principles from details belonging to one physical example.

It also clarifies why category theory is more than decorative notation. The arrows and composition laws force us to specify what counts as a system, what information lives at its boundary, and what it means to connect two systems. If those choices are sound, calculations on components can be transported into calculations on networks of components.

My public post develops these ideas selectively. It introduces parts of the compositional framework, pauses over details that I found especially illuminating, and then uses the framework to consider a quantum system. Quantum examples are valuable because they test how far thermodynamic structure can travel beyond the classical mechanical pictures that originally motivated the field.

There are important limits to keep in view. An elegant compositional description does not eliminate the physical work of choosing the right variables or justifying an equilibrium approximation. A boundary model can omit effects that matter at another scale. Category theory organizes relationships once the objects and interfaces have been specified; it does not choose those objects automatically.

The broader question is how much scientific reasoning can be made modular. Modern science studies systems that are too complicated to hold in one description, from coupled energy networks to biological organization. Compositional mathematics offers a way to ask whether local models can be joined without losing their meaning. Thermodynamics, with its long history of extracting reliable structure from hidden microscopic detail, is a natural place to find out.

## Further reading

- [Read my public post](https://golem.ph.utexas.edu/category/2022/07/how_to_apply_category_theory_t.html)
- [Read the arXiv record for *Compositional Thermostatics*](https://arxiv.org/abs/2111.10315)
