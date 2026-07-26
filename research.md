---
layout: research
title: "Research"
description: "Research interests and paper explainers from Chad Harper."
section: "research"
intro: |
  I study how local interactions produce large-scale behavior in complex systems. My work draws on statistical physics, information theory, dynamical systems, and ethics to ask questions in computational neuroscience, neuromorphic computing, network science, and algorithmic fairness.
---
## Manuscripts

<article class="research-entry research-entry--manuscript" markdown="1">
  <p class="research-entry__status">Manuscript in progress</p>
  <h3>How Can We Measure Dynamical Complexity From a Time Series?</h3>

  A time series can look complicated for several reasons. It may be driven by many interacting degrees of freedom, shaped by a small nonlinear system, or obscured by noise. A useful measure of complexity should help distinguish structure that persists through time from variation that carries little information about what comes next.

  One influential approach is **predictive information**, the mutual information shared by a signal's past and future. In plain terms, it asks how much knowing the past reduces uncertainty about the future. William Bialek, Ilya Nemenman, and Naftali Tishby showed that the way this quantity grows with observation time can reflect the complexity of the process that generated the data. More recent work on Dynamical Components Analysis extends the same intuition to high-dimensional recordings by finding projections that preserve temporal predictability.

  These ideas open a practical question: when can observations alone reveal the effective complexity of an unknown dynamical system? I am exploring broad connections among prediction, representation, and complexity, with particular interest in measures that remain interpretable across different kinds of time-dependent data.
</article>

<article class="research-entry research-entry--manuscript" markdown="1">
  <p class="research-entry__status">Manuscript in progress</p>
  <h3>What Makes a Single Neuron Computationally Complex?</h3>

  The familiar picture of a neuron is simple: it receives signals, combines them, and produces a spike. Real cortical neurons have branching dendrites, many kinds of ion channels, and electrical properties that vary across space and time. Those features allow a cell to transform its inputs in ways that a single weighted sum cannot capture.

  A striking demonstration came from work that trained artificial neural networks to reproduce the input-output behavior of detailed biophysical neuron models. For some cortical cell models, faithful reproduction required a deep network. The result gives researchers a common language for comparing a biological neuron's dynamics with familiar computational architectures, while leaving open how particular biological features contribute to that complexity.

  Information-theoretic tools offer another perspective. Measures based on predictability can ask how much temporal structure is present in a neuron's activity, while dimensionality-reduction methods can separate that structure from variance that is less useful for forecasting. I am exploring the broad question of how a neuron's biophysics shapes its intrinsic dynamical complexity and how that complexity can be described in a form that supports comparisons across cells.
</article>

## Current Questions

<div class="research-question-grid" markdown="1">
  <article class="research-entry research-entry--question">
    <h3>How Do Neurons and Astrocytes Share the Energy Cost of Computation?</h3>
    <p>Neurons process signals while astrocytes help regulate synapses and metabolism. I am thinking about how this cellular partnership shapes the energy efficiency of computation in the brain.</p>
  </article>

  <article class="research-entry research-entry--question">
    <h3>When Does Local Network Structure Control Global Dynamics?</h3>
    <p>Network motifs and walks connect local wiring patterns to system-wide behavior. I am thinking about when those connections persist across single-layer and multilayer networks.</p>
  </article>

  <article class="research-entry research-entry--question">
    <h3>How Does Bargaining Power Shape Stable Social Conventions?</h3>
    <p>Evolutionary bargaining models can study how unequal outside options stabilize social norms. I am thinking about questions of scale, stability, and transitions in such systems.</p>
  </article>

  <article class="research-entry research-entry--question">
    <h3>How Should Compatibility Shape the Allocation of Scarce Organs?</h3>
    <p>Deceased-donor organs arrive over time, and compatibility changes a patient's opportunities. I once explored how allocation could account for urgency, compatibility, access, and distributive justice together.</p>
  </article>
</div>
