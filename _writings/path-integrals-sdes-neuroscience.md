---
layout: post
title: "Path Integral, Stochastic Differential Equations, and Their Application to Neuroscience"
category: "Technical Stuff"
date: 2024-11-11
excerpt: "Exploring path integrals and stochastic differential equations as powerful tools in neuroscience to understand the impact of intrinsic and extrinsic noise in neural systems."
---

# Path Integrals, Stochastic Differential Equations, and Their Application to Neuroscience

**Author:** Chad Harper  


---

## Introduction

A central challenge in neuroscience is understanding the impact of noise, both from microscopic molecular and cellular levels to the macroscopic level of neuronal populations. Noisy systems can be modeled in one of two ways: by adding extrinsic noise terms to deterministic models or, alternatively, by assuming that noise arises intrinsically as a collective population effect. The latter case is described using stochastic dynamics in terms of a neural master equation [^1]. We will adopt the stochastic system approach in this paper.

Though commonly associated with quantum mechanics, path integrals can be used to represent and analyze neuronal systems. In fact, any stochastic system can be expressed in terms of a path integral. This allows for the systematic application of asymptotic methods, greatly simplifying the analysis of complex systems.

In this paper, we present a neural master equation for a stochastic hybrid neural network—a model designed to capture both the deterministic and stochastic aspects of neural dynamics. We then introduce the concept of path integrals and discuss their applications to stochastic differential equations (SDEs), providing a practical and insightful tool to analyze our neural system of interest.

---

## Stochastic Hybrid Network Model

Noise in neural systems can be classified into two types: intrinsic and extrinsic. **Extrinsic noise**, arising from external environmental factors, is often modeled using continuous Markov processes based on Langevin equations. In contrast, **intrinsic noise** originates from random fluctuations due to the discrete nature of molecular-level chemical reactions. These fluctuations are particularly noticeable when the number of reacting molecules is small, necessitating a master equation approach for modeling [^3].

In [^4], network population dynamics were modeled as a stochastic hybrid system described by a "velocity" jump Markov process. We discuss this model below.

### Master Equations

A **master equation** describes the time evolution of the probability distribution over a set of discrete states in a stochastic system. A general form is:

$$
\frac{dP_i(t)}{dt} = \sum_{j \neq i} \left[ R_{j \to i} P_j(t) - R_{i \to j} P_i(t) \right],
$$

where:

- $P_i(t)$ is the probability of the system being in state $ i $ at time $t$.
- $R_{j \to i}$ is the transition rate from state $ j $ to state $i$.

This equation captures the balance of probability flow between different states: the first term represents the inflow to state $i$, while the second term represents the outflow from state $i$.

To solve the master equation, one typically seeks:

- **Stationary distributions** where $\frac{dP_i(t)}{dt} = 0$ for all $i$.
- **Time-dependent solutions** to understand transient dynamics, using methods like matrix exponentiation, generating functions, or numerical simulations.

Below, we describe the Differential Chapman-Kolmogorov equation (CKdE), which generalizes the master equation and encompasses the Fokker-Planck equation as a special case.

### Differential Chapman-Kolmogorov Equation: Construction Outline

The CKdE describes the dynamics of a stochastic process over time. Here's an outline of its construction:

1. **Start with the Chapman-Kolmogorov Equation**:

   For a Markov process with transition probabilities $p(\mathbf{x}, t | \mathbf{x}_0, t_0)$:

   $$
   p(\mathbf{x}, t+\Delta t | \mathbf{x}_0, t_0) = \int_{\Omega} p(\mathbf{x}, t+\Delta t | \mathbf{z}, t) p(\mathbf{z}, t | \mathbf{x}_0, t_0) \, d\mathbf{z}.
   $$

2. **Consider the Time Derivative of the Probability Density**:

   $$
   \frac{\partial p(\mathbf{x}, t)}{\partial t} = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \left[ p(\mathbf{x}, t+\Delta t) - p(\mathbf{x}, t) \right].
  $$

3. **Use the Chapman-Kolmogorov Equation**:

   $$
   \frac{\partial p(\mathbf{x}, t)}{\partial t} = \lim_{\Delta t \to 0} \frac{1}{\Delta t} \int_{\Omega} \left[ p(\mathbf{x}, t+\Delta t | \mathbf{z}, t) p(\mathbf{z}, t) - p(\mathbf{z}, t+\Delta t | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z}.
   $$

4. **Divide the Integration Region**:

   Split the integration over $\mathbf{z}$ into:

   - **Continuous part** ($\| \mathbf{x} - \mathbf{z} \| < \epsilon$): corresponds to small changes.
   - **Jump part** ( $\| \mathbf{x} - \mathbf{z} \| \geq \epsilon$): corresponds to jumps or discontinuities.

   Denote these contributions as $R_1$ and $R_2$, respectively.

5. **Expand the Continuous Part ($R_1$ )**:

   Use a Taylor series expansion around $\mathbf{x}$ for small $\mathbf{r} = \mathbf{z} - \mathbf{x}$ :

  $$
   R_1 \approx -\sum_i \frac{\partial}{\partial x_i} [A_i(\mathbf{x}, t) p(\mathbf{x}, t)] + \frac{1}{2} \sum_{i,j} \frac{\partial^2}{\partial x_i \partial x_j} [B_{ij}(\mathbf{x}, t) p(\mathbf{x}, t)],
   $$

   where $A_i(\mathbf{x}, t) \) is the drift vector and \( B_{ij}(\mathbf{x}, t)$ is the diffusion matrix.

6. **Handle the Jump Part ( $R_2$)**:

   For jumps, define the transition rate \( W(\mathbf{x} | \mathbf{z}, t) \).

7. **Combine Both Parts to Obtain the CKdE**:

   \[
   \frac{\partial p(\mathbf{x}, t)}{\partial t} = -\sum_i \frac{\partial}{\partial x_i} [A_i(\mathbf{x}, t) p(\mathbf{x}, t)] + \frac{1}{2} \sum_{i,j} \frac{\partial^2}{\partial x_i \partial x_j} [B_{ij}(\mathbf{x}, t) p(\mathbf{x}, t)] + \int_{\Omega} \left[ W(\mathbf{x} | \mathbf{z}, t) p(\mathbf{z}, t) - W(\mathbf{z} | \mathbf{x}, t) p(\mathbf{x}, t) \right] d\mathbf{z}.
   \]

   This CKdE describes the time evolution of the probability density \( p(\mathbf{x}, t) \) for a stochastic process that includes both diffusion and jump processes.

---

## Conclusion

We have presented a stochastic hybrid neural network model and demonstrated how path integrals can be used to analyze such systems. By expressing the stochastic dynamics in terms of a path integral, we can leverage powerful mathematical tools to study complex neural processes, including the effects of intrinsic noise at the population level.

---

## References

[^1]: Buice, M. A., & Cowan, J. D. (2007). Field-theoretic approach to fluctuation effects in neural networks. *Physical Review E*, 75(5), 051919.  
[^2]: Ullah, M., & Wolkenhauer, O. (2007). Family tree of Markov models in systems biology. *IET Systems Biology*, 1(4), 247–254.  
[^3]: Bressloff, P. C., & Newby, J. M. (2013). Metastability in a stochastic neural network modeled as a velocity jump Markov process. *SIAM Journal on Applied Dynamical Systems*, 12(3), 1394–1435.  
[^4]: Bressloff, P. C. (2015). Path-integral methods for analyzing the effects of fluctuations in stochastic hybrid neural networks. *Journal of Mathematical Neuroscience*, 5(1), 4.  
