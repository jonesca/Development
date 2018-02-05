# Introduction

## An Introduction to Continuous Delivery

### What Is Continuous Delivery?

[Agile Manifesto](http://agilemanifesto.org)

* Value more **individuals and interactions** over processes and tools
* Value more **working software** over comprehensive documentation
* **Customer collaboration** over contract negotiation
* **Responding to change** over following a plan

"That is, while there is value in the items on the right, we value the items on the left more"

The 1st of 12 principles the manifesto is based on: Our highest priority is to satisfy the customer through early and continuous delivery of valuable software

<h3 class=green>Continuous Delivery</h3>

Continuous delivery is all about creating a repeatable and reliable process for delivering software in order to <strong>deliver high value software</strong> to our customer <strong>fast</strong>!

## The 8 Principles of Continuous Delivery

1. The process for releasing/deploying software **MUST** be **repeatable** and **reliable**
1. Automate evereything!
1. If something's difficult or painful, do it more often
1. Keep everything in source control
1. Done means "released"
1. Build quality in!
1. Everybody has responsibility for the release process
1. Improve conintuously

## What is a Continuous Delivery Pipeline?

The set of steps we use to deploy/deliver software

* The deployment pipeline is the key pattern that enables continuous delivery
* Provides visibility into production readiness
* Gives feedback on every change of your system

### Continuous Deployment

Continuous deployment is the same thing as continuous delivery only fully automated without any manual interventions such as human bottlenecks.  Continuous Deployment is the end goal.

## Optimize the Delivery Pipeline

### The Theory of Constraints

<p class="quote">"If there was nothing preventing a system from achieving higher throughput, its throughput would be infinite.  Only by increasing flow through the <strong>constraint</strong> can overall throughput be increased" - Eliyahu M. Goldratt - The goal</p>

The flow or throughput is limited by the set of steps necessary to go to production.

1. Identify the system's constraints(s). This can be any step in the process of delivering code to production. This could be coding, testing, compiling, etc...
1. Decide how to exploit the system's constraints(s). This means analyze the constraints (steps) and determine which will have the most effect if changed
1. Subordinate everything else to the above decision(s). This means only attack the steps that will reduce the most waste
1. Elevate the system's constraint(s).

Any optimization not related to the system constraint is useless since it will not increase the system flow
