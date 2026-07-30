---
title: "ON-OFF neuromorphic ISING machines using Fowler-Nordheim annealers"
description: "A guide to NeuroSA, an asynchronous neuromorphic architecture for simulated annealing on combinatorial optimization problems."
paper_title: "ON-OFF neuromorphic ISING machines using Fowler-Nordheim annealers"
paper_status: "Published"
disclosure_class: "published"
research_order: 2
display_date: 2025-03-31
journal: "Nature Communications 16, 3086 (2025)"
pdf_viewer_url: "/research/on-off-neuromorphic-ising-machines/pdf/"
paper_action_label: "View PDF"
card_action_label: "Read the explainer"
tags: [neuromorphic computing, optimization, statistical physics]
---
Many computational problems are easy to state and hard to solve. Suppose a network must be divided into two groups while cutting as many connections as possible, or a set of mutually compatible choices must be selected from a much larger collection. A candidate answer can often be scored quickly. Finding the best answer may require searching through a number of possibilities that grows explosively with the size of the problem.

Statistical physics offers a useful picture of this search. In an Ising model, each variable acts like a tiny spin that can point in one of two directions. Interactions among spins assign an energy to every collective configuration. The lowest-energy configuration is the ground state. Many combinatorial optimization problems can be translated into this language so that a better solution corresponds to a lower energy.

The difficulty is the landscape. An algorithm moving downhill can become trapped in a local minimum, a configuration better than its immediate neighbors yet worse than the best state elsewhere. Simulated annealing addresses this problem by borrowing another physical analogy. At high temperature, random fluctuations sometimes push the system uphill, helping it escape shallow traps. As the temperature falls, those excursions become less likely and the search settles.

The cooling schedule matters. If the temperature falls too quickly, the search can freeze in a poor state. A classical result shows that sufficiently slow cooling can converge toward a global optimum under appropriate conditions, although the schedule may demand substantial time. Practical machines therefore face a tension among speed, solution quality, and the cost of producing controlled randomness.

Our paper asks how this annealing logic can be expressed in a neuromorphic architecture. Neuromorphic systems communicate through discrete spikes and are designed to exploit distributed, event-driven computation. Their components update asynchronously rather than waiting for a single global clock. That makes them a promising match for searches in which many binary variables change locally over time.

The architecture is called NeuroSA. Each optimization variable is represented by a pair of integrate-and-fire neurons, one labeled ON and the other OFF. A spike from one member of the pair records a transition of the corresponding binary state. Connections among neuron pairs encode the interaction matrix of the Ising problem. Because the updates occur through spikes, the network maps the acceptance dynamics of simulated annealing directly into asynchronous events.

Annealing also requires a temperature-like control that changes over time. NeuroSA adjusts neuronal thresholds using a Fowler-Nordheim annealer. Fowler-Nordheim tunneling is a quantum-mechanical process in which electrons cross an energy barrier under a strong electric field. Previous device work showed that this process can produce a slowly decaying physical signal with the form needed for annealing. In the reported system, that behavior supplies the mathematical inspiration for the threshold schedule.

The ON-OFF representation is important because spikes are transient. A conventional binary variable can simply remain in state zero or one. A spiking system instead needs events that indicate changes while preserving an interpretable state. Differential pairs provide that bookkeeping: activity in the ON neuron and OFF neuron represents opposite transitions, while their couplings enforce the optimization problem's energy relationships.

We evaluated NeuroSA on two established classes of problems. MAX-CUT asks for a division of a graph's vertices that maximizes the weight of edges crossing between the two groups. Maximum Independent Set asks for the largest collection of vertices with no edges among them. Both have direct graph interpretations and can be written as quadratic binary optimization problems.

On the reported benchmarks, NeuroSA produced solutions concentrated within 99 percent of the best known results, and on some Maximum Independent Set instances it exceeded the reported state of the art. The same general hyperparameter setting was used across graphs rather than being tuned separately for each one. That matters because extensive problem-specific tuning can hide part of an optimizer's practical cost.

The work also mapped the architecture to SpiNNaker2, a many-core neuromorphic platform built for real-time spiking neural network workloads. This step tests whether the event-driven formulation can live on hardware designed around local memory and parallel spike processing. The paper reports time-to-solution and energy-to-solution advantages over a CPU implementation in the examined setting.

The results carry qualifications. Large optimization problems still require storing and communicating many interactions, so memory mapping becomes a bottleneck as graphs scale. High-quality random variables can also consume significant energy. The Fowler-Nordheim behavior was digitally emulated on SpiNNaker2 because using the available physical device directly would have required high-precision conversion hardware. The paper therefore demonstrates the architecture and annealing dynamics rather than a fully integrated physical annealer.

These limits point toward the central engineering question. An optimization method is valuable only when its algorithm, representation, noise source, memory system, and hardware timing work together. NeuroSA shows one way to align those layers around asynchronous simulated annealing. It also leaves room to investigate physical sources of randomness, more efficient mappings for sparse problems, and the tradeoff between the energy spent searching and the quality of the solution found.

The broader lesson is that a metaphor from physics can become a computational architecture. Spins become paired spiking neurons, energy becomes synaptic interaction, and cooling becomes a changing threshold. Each translation must preserve the logic of the original search. When it does, neuromorphic hardware can participate in optimization as a physical, event-driven system rather than as a conventional processor simulating one.

## Paper

[View the published paper in the site PDF reader]({{ page.pdf_viewer_url | relative_url }})
