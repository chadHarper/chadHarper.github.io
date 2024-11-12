---
layout: post
title: "Path Integral, Stochastic Differential Equations
and Their Application to Neuroscience "
category: "Technical Stuff"
date: 2024-12-08
excerpt: 
---

# Path Integrals, Stochastic Differential Equations, and Their Application to Neuroscience

**Author:** Chad Harper  
**Date:** May 2023

## Introduction

A central challenge in neuroscience is understanding the impact of noise, from microscopic molecular and cellular levels to the macroscopic scale of neuronal populations. Noisy systems can be modeled in two primary ways: by adding extrinsic noise terms to deterministic models, or by assuming that noise arises intrinsically as a collective effect of population dynamics. The latter approach leads to stochastic dynamics described by a neural master equation [^1]. In this work, we adopt the stochastic system as our model.

Although path integrals are most commonly associated with quantum mechanics, they can be effectively used to represent and analyze neuronal systems. In fact, any stochastic system can be expressed in terms of a path integral, which allows for the systematic application of asymptotic methods to simplify the analysis of complex systems.

In this note, we present a neural master equation for a stochastic hybrid neural network—a model designed to capture both the deterministic and stochastic aspects of neural dynamics. We then introduce the concept of path integrals and discuss their applications to stochastic differential equations (SDEs), providing a practical and insightful tool to analyze our neural system of interest.

## Stochastic Hybrid Network Model

The literature distinguishes between two types of noise: intrinsic and extrinsic. **Extrinsic noise**, arising from external environmental factors, is often modeled using continuous Markov processes based on Langevin equations. In contrast, **intrinsic noise** originates from random fluctuations due to the discrete nature of molecular-level chemical reactions. These fluctuations are particularly noticeable when the number of reacting molecules is small, necessitating a master equation approach for modeling [^2].

In [^3], network population dynamics were modeled in terms of a stochastic hybrid system described by a "velocity jump" Markov process, which we discuss below.

### Master Equations

A **master equation** is a mathematical framework used to describe the time evolution of the probability distribution over a set of discrete states in a stochastic system. A general form of a master equation is given by:

\[
\frac{dP_i(t)}{dt} = \sum_{j \neq i} \left[ R_{j \to i} P_j(t) - R_{i \to j} P_i(t) \right],
\]

where \( P_i(t) \) represents the probability of the system being in state \( i \) at time \( t \), and \( R_{j \to i} \) denotes the transition rate from state \( j \) to state \( i \).

The master equation captures the balance of probability flow between different states in the system:

- The first term in the sum represents the probability flow **into** state \( i \) from all other states \( j \).
- The second term corresponds to the probability flow **out of** state \( i \) to all other states \( j \).

To solve the master equation, one typically looks for a stationary probability distribution, which satisfies \( \frac{dP_i(t)}{dt} = 0 \) for all states \( i \). This distribution represents the long-term behavior of the system and can provide insights into its steady-state properties. Alternatively, one can seek a time-dependent solution to the master equation to understand the system's transient dynamics. This can be achieved using various techniques, such as matrix exponentiation, generating functions, or numerical simulations.

Below, we describe the **differential Chapman-Kolmogorov equation** (CKdE). The CKdE encompasses—as special cases—the Fokker-Planck equation and the master equation.

### Differential Chapman-Kolmogorov Equation: Construction Outline

Distinct from the integral form of the Chapman-Kolmogorov equation, which relates transition probabilities over different time intervals, the **differential Chapman-Kolmogorov equation** provides a time-evolution equation for the probability density function of a stochastic process. We outline its construction below.

1. **Consider a Markov process** with transition probabilities \( p(\mathbf{x}, t | \mathbf{x}_0, t_0) \), which satisfies the Chapman-Kolmogorov equation:

   \[
   p(\mathbf{x}, t + \Delta t | \mathbf{x}_0, t_0) = \int_{\Omega} p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) p(\mathbf{z}, t | \mathbf{x}_0, t_0) \, d\mathbf{z}.
   \]

   Here, \( \Omega \) represents the state space.

2. **Consider the time derivative of the probability density** \( p(\mathbf{x}, t) \), assuming \( \mathbf{x}_0 \) and \( t_0 \) are fixed:

   \[
   \frac{\partial}{\partial t} p(\mathbf{x}, t) = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \left[ p(\mathbf{x}, t + \Delta t) - p(\mathbf{x}, t) \right].
   \]

   Using the Chapman-Kolmogorov equation, we can write:

   \[
   p(\mathbf{x}, t + \Delta t) = \int_{\Omega} p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) p(\mathbf{z}, t) \, d\mathbf{z}.
   \]

   Therefore,

   \[
   \frac{\partial}{\partial t} p(\mathbf{x}, t) = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \left[ \int_{\Omega} p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) p(\mathbf{z}, t) \, d\mathbf{z} - p(\mathbf{x}, t) \right].
   \]

3. **Subtract and add \( \int_{\Omega} p(\mathbf{z}, t + \Delta t | \mathbf{x}, t) p(\mathbf{x}, t) \, d\mathbf{z} \) to the numerator** to symmetrize the expression:

   \[
   \frac{\partial}{\partial t} p(\mathbf{x}, t) = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \left\{ \int_{\Omega} \left[ p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) p(\mathbf{z}, t) - p(\mathbf{z}, t + \Delta t | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z} \right\}.
   \]

4. **Divide the integration region into two parts**:

   - **Continuous part**: \( ||\mathbf{x} - \mathbf{z}|| < \epsilon \)
   - **Jump part**: \( ||\mathbf{x} - \mathbf{z}|| \geq \epsilon \)

   We denote the contributions from these regions as \( R_1 \) and \( R_2 \), respectively:

   \[
   R_1 = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \int_{||\mathbf{x} - \mathbf{z}|| < \epsilon} \left[ p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) p(\mathbf{z}, t) - p(\mathbf{z}, t + \Delta t | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z},
   \]

   \[
   R_2 = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \int_{||\mathbf{x} - \mathbf{z}|| \geq \epsilon} \left[ p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) p(\mathbf{z}, t) - p(\mathbf{z}, t + \Delta t | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z}.
   \]

   Therefore,

   \[
   \frac{\partial}{\partial t} p(\mathbf{x}, t) = R_1 + R_2.
   \]

5. **Expand the integrand in \( R_1 \) in powers of \( \mathbf{r} = \mathbf{x} - \mathbf{z} \)**:

   For small \( \mathbf{r} \), we can perform a Taylor expansion:

   \[
   p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) = p(\mathbf{x}, t + \Delta t | \mathbf{x} - \mathbf{r}, t) \approx p(\mathbf{x}, t + \Delta t | \mathbf{x}, t) - \mathbf{r}^\top \nabla_{\mathbf{x}} p(\mathbf{x}, t + \Delta t | \mathbf{x}, t) + \cdots
   \]

   Similarly for \( p(\mathbf{z}, t) \).

   Considering the limit \( \Delta t \to 0 \) and integrating over \( \mathbf{r} \), we obtain the drift and diffusion terms:

   \[
   R_1 = -\sum_{i} \frac{\partial}{\partial x_i} [A_i(\mathbf{x}, t) p(\mathbf{x}, t)] + \frac{1}{2} \sum_{i, j} \frac{\partial^2}{\partial x_i \partial x_j} [B_{ij}(\mathbf{x}, t) p(\mathbf{x}, t)],
   \]

   where \( A_i(\mathbf{x}, t) \) is the drift vector and \( B_{ij}(\mathbf{x}, t) \) is the diffusion tensor.

6. **Evaluate \( R_2 \) for the jump part**:

   For \( ||\mathbf{x} - \mathbf{z}|| \geq \epsilon \), the transitions correspond to jumps, and we can define the transition rate \( W(\mathbf{x} | \mathbf{z}, t) \):

   \[
   \lim_{\Delta t \to 0} \frac{1}{\Delta t} p(\mathbf{x}, t + \Delta t | \mathbf{z}, t) = W(\mathbf{x} | \mathbf{z}, t).
   \]

   Then,

   \[
   R_2 = \int_{\Omega} \left[ W(\mathbf{x} | \mathbf{z}, t) p(\mathbf{z}, t) - W(\mathbf{z} | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z}.
   \]

7. **Combine the results to obtain the CKdE**:

   \[
   \frac{\partial}{\partial t} p(\mathbf{x}, t) = -\sum_{i} \frac{\partial}{\partial x_i} [A_i(\mathbf{x}, t) p(\mathbf{x}, t)] + \frac{1}{2} \sum_{i, j} \frac{\partial^2}{\partial x_i \partial x_j} [B_{ij}(\mathbf{x}, t) p(\mathbf{x}, t)] + \int_{\Omega} \left[ W(\mathbf{x} | \mathbf{z}, t) p(\mathbf{z}, t) - W(\mathbf{z} | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z}.
   \]

This is the **differential Chapman-Kolmogorov equation** (CKdE), which describes the time evolution of the probability density \( p(\mathbf{x}, t) \) for a stochastic process that includes both continuous diffusion and discrete jumps.

- When \( A_i(\mathbf{x}, t) = B_{ij}(\mathbf{x}, t) = 0 \), the CKdE reduces to the **master equation** for jump Markov processes with discontinuous paths.
- When the jump term \( W \) is zero, the CKdE reduces to the **Fokker-Planck equation**, which describes the evolution of the probability density for continuous diffusion processes.

### Our Stochastic Hybrid Model of Interest

The following model is motivated by the idea that finite-size effects in local populations of neurons act as a source of intrinsic noise.

Consider a set of \( M \) homogeneous neuron populations labeled by \( \alpha \in \{1, 2, \dots, M\} \). In each population, there are \( \mathcal{N} \) neurons, and \( \mathcal{N}_{\alpha}(t) \) is the number of neurons in population \( \alpha \) that fire in the time interval \( [t, t + \Delta t] \). Here, \( \Delta t \) is a small time window for counting spikes. The output activity of population \( \alpha \) is represented by a discrete stochastic variable \( A_{\alpha}(t) \) and is given by:

\[
A_{\alpha}(t) = \frac{\mathcal{N}_{\alpha}(t)}{\mathcal{N} \Delta t}.
\]

The variables \( \mathcal{N}_{\alpha}(t) \), being discrete stochastic variables, evolve according to a one-step jump Markov process. Let \( G(u) \) be a gain function representing the firing rate, given by:

\[
G(u) = \frac{G_0}{1 + e^{-\gamma(u - \kappa)}},
\]

where \( \gamma \) and \( \kappa \) correspond to the gain and threshold, respectively, \( G_0 \) is the maximum firing rate, and \( u \) is the synaptic current. Given the above, the Markov evolution of \( \mathcal{N}_{\alpha}(t) \) is given by:

\[
\begin{cases}
\mathcal{N}_{\alpha}(t) \xrightarrow{\omega_{+} / \tau_{\alpha}} \mathcal{N}_{\alpha}(t) + 1, \\
\mathcal{N}_{\alpha}(t) \xrightarrow{\omega_{-} / \tau_{\alpha}} \mathcal{N}_{\alpha}(t) - 1,
\end{cases}
\]

where the transition rates are:

\[
\omega_{+} = \mathcal{N} \Delta t \, G(U_{\alpha}), \quad \omega_{-} = \mathcal{N}_{\alpha}(t),
\]

and \( \tau_{\alpha} \) determines the relaxation rate of the local population to the instantaneous firing rate.

\( U_{\alpha}(t) \) is the effective synaptic current into population \( \alpha \), which evolves according to:

\[
\tau \frac{d U_{\alpha}(t)}{dt} = -U_{\alpha}(t) + \sum_{\beta=1}^{M} A_{\beta}(t).
\]

The above stochastic process is a **stochastic hybrid system**. Notice that the transition rate \( \omega_{+} \) depends on \( U_{\alpha} \), which itself is coupled to the Markov jump process via \( A_{\beta}(t) \). Between jumps, \( U_{\alpha}(t) \) evolves deterministically. As a result, this system can be characterized as a **piecewise-deterministic Markov process**.

For \( \mathbf{u} = (u_1, u_2, \dots, u_M) \) and similarly for \( \mathbf{n} = (n_1, n_2, \dots, n_M) \), define the probability density:

\[
\operatorname{Prob}\left\{ U_{\alpha}(t) \in (u_{\alpha}, u_{\alpha} + du), \, \mathcal{N}_{\alpha}(t) = n_{\alpha} \right\} = p(\mathbf{u}, \mathbf{n}, t \mid \mathbf{u}_0, \mathbf{n}_0, t_0) \, du.
\]

Let \( v_{\alpha}(\mathbf{u}, \mathbf{n}) \) be a drift velocity representing the piecewise synaptic dynamics:

\[
v_{\alpha}(\mathbf{u}, \mathbf{n}) = -u_{\alpha} + \sum_{\beta} n_{\beta}.
\]

Between jumps, the synaptic current evolves according to:

\[
\tau \frac{d u_{\alpha}(t)}{dt} = v_{\alpha}(\mathbf{u}, \mathbf{n}).
\]

Let \( W(\mathbf{n}' | \mathbf{n}; \mathbf{u}) \) represent a \( \mathbf{u} \)-dependent transition rate matrix for the jump Markov process. Then the probability density \( p(\mathbf{u}, \mathbf{n}, t) \) evolves according to the CKdE:

\[
\frac{\partial p}{\partial t} = -\frac{1}{\tau} \sum_{\alpha=1}^{M} \frac{\partial}{\partial u_{\alpha}} \left[ v_{\alpha}(\mathbf{u}, \mathbf{n}) p(\mathbf{u}, \mathbf{n}, t) \right] + \frac{1}{\tau_{\alpha}} \sum_{\mathbf{n}'} W(\mathbf{n}' | \mathbf{n}; \mathbf{u}) p(\mathbf{u}, \mathbf{n}', t).
\]

The first term represents the deterministic evolution of \( \mathbf{u} \) between jumps, while the second term represents the stochastic jumps in \( \mathbf{n} \) due to neuronal firing.

Path integrals allow us to analyze this system by providing a framework to compute quantities like the probability density \( p(\mathbf{u}, \mathbf{n}, t) \) and to apply asymptotic methods.

## Path Integrals

In physics, particularly in quantum mechanics, the **path integral** formulation provides a way to compute quantities by integrating over all possible paths that a system can take. The path integral is defined as an integral over all possible trajectories, weighted by the exponential of the action functional \( S[x(t)] \):

\[
Z = \int \mathcal{D}x(t) \, e^{i S[x(t)] / \hbar},
\]

where \( \mathcal{D}x(t) \) denotes the integration over all paths \( x(t) \), and \( \hbar \) is the reduced Planck constant.

In the context of statistical mechanics and stochastic processes, path integrals can be used to compute partition functions and correlation functions. For a stochastic process, the path integral representation involves integrating over all possible realizations of the stochastic variables, weighted by an appropriate probability measure.

For example, consider the generating functional:

\[
Z[J] = \left\langle e^{\int J(x) \phi(x) \, dx} \right\rangle = \int e^{\int J(x) \phi(x) \, dx} P[\phi] \mathcal{D}\phi,
\]

where \( P[\phi] \) is the probability functional for the stochastic field \( \phi(x) \), and \( J(x) \) is an external source.

For Gaussian processes, the generating functional can be computed explicitly, and moments can be obtained by taking functional derivatives with respect to \( J(x) \):

\[
\langle \
