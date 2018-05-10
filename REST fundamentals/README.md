## **REST Fundamentals**

#### -   *What challenges can address rest?*

1.  ```Heterogeneous Interoperability:```

	-   integration of different application that are built against different
    framework and run on different platforms.

2.  ```Devices:```

	-   the services and client applications all need to be able to evolve
   independently

	-   efficiency and performance (problems with network insecurity and high cost
   of data consuming)

3. ```The Cloud ``` (computing capability and storage capacity):

	-   applications should well work both with the elastic infrastructure of cloud
    providers and the larger infrastructure of the networks over which they
    communicate

>It is critical to build a scalable architecture in order to take advantage of a
scalable infrastructure

>Rest based on the idea of a network-based API rather than a library-based API.

#### -   *What are the properties of REST?*

1.  ```Heterogeny``` (ability of the application to integrate with other participants
    regardless of language or platform)
2.  ```Scalability``` (scoping complexity to a uniform interface and a single communication layer)
3) ```Evolvability``` (ability of RESTful clients and services to evolve independently)
4) ```Visibility``` (ability for value-added components to operate correctly without meeting access to any hidden and potentially proprietary state).
5) ```Reliability``` (the state of a given workflow always exists in one place at a point in time - so any failure can be recovered from in a deterministic way)
6) ```Efficiency``` (REST enables the proxy servers and caches to participate in the handling requests)
7) ```Performance```
8) ```Manageability``` (interactions between components happen in a highly consistent and highly visible way)

#### -   *Can we classify all the architectures that are not SOAP as REST?*

No, we can’t. SOAP and REST have different design targets and goals, so they
can’t be interchangeable.

#### -   *What is the design target in RPC?*

A remote function or a method.

#### -   *What is the goal of an RPC architecture?*

To abstract a way all of the other details of the network - the semantic around
the remote interaction. So that while components may be interacting over a
network, those details are completely abstracted away from the developer.

#### -   *What is the design target in REST?*

A resource.

#### -   *Are the semantic around the remote interaction abstracted in REST?*

Not at all. It’s a key part of the design.

#### -   *Is REST HTTP?*

No, it isn’t. HTTP is the protocol over which the most RESTful interactions
happen, but we also can write an HTTP friendly application which is
fundamentally **not** RESTful.

#### -   *Is REST URIs?*

Not, it isn’t. URLs have their place in REST, but don’t paint the whole picture.

#### -   *What is REST about?*

It is all about style.It’s not a protocol or design pattern - It’s style of
thinking about and designing our applications.
```
REST is a way to describe the larger architectural concepts behind how the web
was design to work.
```
#### -   *What are the differences between RPC and REST?*

1.  ###### Idea of a contract (the way of understanding between clients and servers)

	-   ```RPC:``` contract is the service and its procedures
	-   ```REST:``` contract is uniform interface

2) ###### Available actions

	-   ```RPC:``` actions are specified out of band (using, for example, a service
    description file)
	-   ```REST:``` actions are standardized by the uniform interfase. Progress through a
    workflow is made by hyper media.

3) ###### Possible erros

	- ```RPC:``` errors are specified out of band
	- ```REST:``` error semantics are part of the uniform interface

4) ###### Caching

	- ```RPC:``` limited caching support
	- ```REST:``` support by all intermediaries

5) ###### Inputs and outputs:

	- ```RPC:``` inputs and outputs are tied to underlying runtime types
	- ```REST:``` inputs and outputs are tied to the media type specification, there is not a formal type system

6) ###### Autonomy:

	- ```RPC:``` apps can tunnel through lots of different protocols usually with a
    simple configuration switch
	- ```REST:``` tied to the uniform interface of the supporting protocol

#### -   *What is Richardson’s Maturity Model?*

It is a tool for seeing where a given architecture fits within the scope of all
concepts.

Model consists of the following levels:

- 0 - POX
- 1 - Resources
- 2 - HTTP Verbs
- 3 - Hypermedia

#### -   *Do the Richardson’s Maturity Model represent different level of rest?*

No, each level of model’s levels represent incremental steps towards REST. Only
applying last lever - Hypermedia, our design can be considered RESTful.

### 1.  **Deriving REST: Constraints**

#### -   *What are approaches to defining an architectural design?*

-   Requirements-Driven
-   Constraints-Driven


#### -   *What is Constraints-Driven approach about?*

It consist of two main steps: identifying the forces that influence system
behavior and then applying constraints so that the design works with those
forces instead of against them.

#### -   *What is Requirements-Driven approach about?*

It has completely different meaning than Constraints-Driven approach: starting
out with small business requirements requirements and design for those. When we
get new requirements, we grow our design to incorporate those.

#### -   *What approach is using RPC?*

Requirements-Driven approach, because the domain of the architecture and the
domain of the business are tightly intertwined.

#### -   *What approach is using REST?*

Constraints-Driven approach, because it maps the business domain on to the
architectural domain rather than mapping the architectural domain on to the
business domain.

>Rest is defined as a result of identifying **forces** that can be barriers to
distributed application.

#### -   *What kinds of forces does REST take into account?*

-   ```Network reliability``` (the network is **not** reliable)
-   ```Latency``` (latency is **not** zero)
-   ```Bandwidth``` (bandwidth is **not** infinite)
-   ```Security``` (the network is **not** secure)
-   ```Network topology``` (the network topology constantly changes)
-   ```Administration``` (there is **not** nor could ever be a single administrator)
-   ```Transport cost``` (transport cost is **not** free, cost of setting up and
    running the supporting network infrastructure is **not** free)
-   ```Heterogeneous network``` (all nodes on the network are **not** the same)
-   ```Complexity``` (everyone who uses our service can use our service incorrectly)

#### -   *What are the main constraints for REST?*

-   Client-Server
-   Stateless
-   Cache
-   The Uniform Interface
-   Layered System
-   Code-on-Demand

#### -   *What is Client-Server constraint is about?*

It defines all interactions between nodes in a distributed architecture as being
between a client and a server. The goal of constraint is separation of concerns.

#### -   *What forces influenced the creation of Client-Server constraint?*

Security and administration (constraint provides a natural scoping boundary in
the interactions), complexity (clients know about servers - not each other) and
heterogeneous network (clients and servers can be built on completely different
platforms using completely different language tools).

#### -   *What are benefits of using Client-Server constraint?*

Portability of clients (we can have lots of different types of clients that
consume our services), scalability (by simplifying the server components) and
evolvability (enables clients to evolve independently from the servers)

#### -   *What is Stateless constraint about?*

The constraint means that the server should be able to get all the information
that it needs in order to process a client request from the request only (not
from additional context information such as session state). All session state is
maintained on the client.

#### -   *What forces influenced the creation of Stateless constraint?*

Network reliability (clients can recover from network errors because of storing
state on the client), network topology (system state isn’t corrupting when
clients and servers come and go), complexity (new processing nodes can be
attached without complex state management), administration (by simplifying
management and visibility)

#### -   *What are benefits of using Stateless constraint?*

Visibility (no risks of state corruption), reliability and scalability(by adding
new servers capable of processing the requests).

#### -   *What is Cache constraint about?*

It says that responses from a server must be explicitly labeled as cacheable or
not cacheable.

#### -   *What forces influenced the creation of Cache constraint?*

Latency (enables avoid making some requests and waiting for the responses),
bandwidth (by local caching for clients and intermediary caching for servers),
transport cost .

#### -   *What are benefits of using Cache constraint?*

Efficiency, Scalability (by growing application’s own resources), performance

#### -   *What is Uniform Interface about?*

It means that all the nodes in the design, whether they’re a client, a server
can communicate with one another via a standard mechanism. It is applying the
principle of generality to network interactions between distributed components.

#### -   *What forces influenced the creation of Uniform Interface constraint?*

Network reliability (by increasing transparency), network topology,
administration, heterogeneous network and complexity (a complexity of app is
constrained to the complexity of the uniform interface).

#### -   *What are benefits of using Uniform Interface constraint?*

Visibility and evolvability.

#### -   *What is Layered System about?*

It says that a component in a system can only know about the components in the
layer with which it is interacting. Such intermediaries as shared caches and
load balancers are used for solving limits’ issues.

#### -   *What forces influenced the creation of Layered System constraint?*

Network topology, Complexity, Security.

#### -   *What are benefits of using Layered System constraint?*

Scale, Manageability.

#### -   *What is Code-on-Demand about?*

It says that in addition to delivering data and metadata, servers can provide
clients with executable code. It is optional and becoming more relevant with
JavaScript. Helps to manage complexity. The trade-off is visibility.The idea is
that clients can download readymade features and not have to write special and
possibly redundant logic.

### 2.  **Elements of RESTful Architecture**

#### -   *What are components?*

The elements that interact with one another. They are organized by the role they
perform in the overall system:

-   Origin server
-   User agent
-   Gateway (represents origin servers to the network)
-   Proxy (represents multiple user agents to the network)

#### -   *What are connectors?*

The set of possible interfaces that a component can implement to accomplish its
work. They are categorized by the role that they perform for a given component:

-   Client (initiates a resource request or a state transfer)
-   Server (listens for a request and responds)
-   Cache (manages a store of representations that can be reused for a specified
    amount of time and can directly respond to request for those
    representations)
-   Resolver (translates something into an address that can be used to initiate
    a connection)
-   Tunnel (relays communication across a boundary)

#### -   *What is a resource?*

It is a concept. It is what the author intends to identify. It maps a concept to
a set of entities over time. It is related to entities as many to many.

#### -   *What is a resource identifier?*

It is how a server makes a resource available for interaction. For example, urls
are used to identify the resources in HTTP.

#### -   *What tools can we use for building and testing RESTful systems based on HTTP?*

Fiddler, cURL.

#### -   *What is resource metadata?*

It is data that describes the resource. It was created for ensuring that the
system has a high degree of visibility. For example, Location and ETag headers
in HTTP.

#### -   *What is representation?*

It is a resource state at a point in time. It can be any sequence of bytes and
resource can have multiple available representations.

#### -   *Why do we need the ability to have different representations for a resource?*

1.  Because resource doesn’t exist concretely as something that can be
    manipulated, so it is needed to manipulate resource indirectly.
2.  Service needs to support lots of different types of clients, that have
    mutable capabilities and expectations. So we need something that provides
    the ability for servers to smoothly navigate this consistently shifting
    landscape - representation.

#### -   *What is the content negotiation?*

The process of ensuring that a client gets the best possible representation.
There are different categories of content negotiations and we can apply
different strategies (server driving and agent driving) for design and
implementation.

#### -   *How does server driven content negotiation take place?*

The server makes a decision about the representation sent to the client based on
information in the client request.

#### -   *How does agent driven content negotiation take place?*

The user agent and the server worked together to determine the best
representation. It is typically means that the server provides the user agent
with a set of choices in the form of links and the user agent dereferences one
of those links.

#### -   *What is the representation metadata?*

It is data that describes the representation. It helps the client or server know
how to process the bytes (how it’s structure and what it means). For example,
accepts headers in HTTP.

#### -   *What is control data?*

It is data that describes a message sent between components. It provides the
semantics for the message exchange (for example, get method in http). It also
enables overriding the default behavior of connectors (for example,
if-none-match header in HTTP).

#### -   *What is hypermedia?*

This is the uniform interface constraint. It is the way to initiate state
transitions. It reduces coupling between the client and server (for example, by
reducing the number of URLs that the client needs to know about in the HTTP).
Examples of hypermedia in html is href and action with method and inputs.

#### -   *What are the types of hypermedia?*

Embedded (html \<img\> tag), outbound (html \<at\> tag), templated (html form
with method “get”), idempotent (html form with method “put”), non-idemponent
(html form with method “post”)

### 3.  **Designing RESTful Services**
```
We should think about our own services through the lens of, what if we didn’t
have computers - defining the physical world analog
```
#### -   *What is the base algorithm for designing the RESTful services?*

1.  List the requirements.
2.  Identify the state transitions.
3.  Identify the resources.
4.  Design the representation.

#### -   *What is main difference between post and put requests?*

A post request identifies the resource that will handle the enclosed entity,
whereas a put request identifies the entity enclosed with the request.

#### -   *What is the base algorithm for designing the Representation?*

1.  ###### Identify the base format(XML, JSON, HTML, etc)

2.  ###### Identify the state transfer:

-   ```read only:``` the client does not transfer data to servers
-  ``` predefined:``` the client having prior knowledge of our format - typically via
    media type specification
-   ```ad-hoc:``` the server tells the client in the representation details about how
    to construct a valid representation

3.  ###### Identify the domain style:

-   ```specific:``` type is tightly bound to the business domain (custom schema)
-   ```general:``` type is bound to a general domain, such as invoices or lists (ATOM)
-   ```agnostic:``` type is unrelated to a specific domain (html)

4) ###### Identify the application flow:

-   ```none:``` client does not have any flow identifiers
-   ```intrinsic:``` identifiers are built into the media type design
-   ```applied:``` identifiers are applied using decorators (HTML rel and class)

#### -   *How do we add new features and fix our own bugs after our service has become immensely popular?*

By versioning.

#### -   *What type of versioning can we use with REST?*

-   Versioning within the representation (service adds whatever it wants to
    representations definition and clients simply ignore what the don’t
    understand)
-   Versioning the representation (if the semantics of a representation change
    as the result of a rename or deletion of an element, versioning takes place
    with using of content negotiation)
-   Versioning the resource (if the server can no longer preserve the semantics
    of the map between a resource and its associated entities, versioning takes
    place by creating a new resource with manifesting in the the resources
    identifier)

### 1.  **Designing RESTful Clients**
```
First thing for us to determine is whether or not our application should be
optimized for run time (+stability, ease of modification etc.) or for development time
```
#### -   *What is the Client Design Workflow?*

Because of constraints like statelessness and the uniform interface, the client
learns arrest API through the process of discovery. We repeat the entire process
until we’ve completed our client application:

1.  Study the media type and sample documents (for example,how the service’s
    business domain has been mapped onto the type, if the chosen media type is
    domain general or domain agnostic)
2.  Request entry point resource
3.  Inspect representation
4.  Write client code
5.  Follow links

#### -   *What is a contract between service and client?*

The Uniform Interface.

#### -   *What parts Uniform Interface consists of?*

-   ```Identification of resources```(identifying what resources are, using address
    of only 1 resource, using resource metadata to optimize communication)
-   ```Manipulation through representations``` (relying on representation metadata,
    using content negotiation to version media types)
-   ```Self-descriptive messages ```(methods, status codes, control flow headers,
    metadata)
-   ```Hypermedia as the engine of application state``` (clients knows how to
    construct a single URL, but they can bookmark other resource URLs as
    optimization)
```
Act on link relationships, not links themselves
```

### 5.  **REST and the Cloud**
#### -   What is good cloud architecture characteristics?

1.  Increasing resources results in a proportional increase in performance
2.  Operationally efficient
3.  Resilient to failure
4.  Realizes economies of scale

#### -   *What are cloud architectural strategies?*

-   ```Design for failure``` (for example, having an automated backup, building system
    to automatically start when a system is booted, avoiding in-memory sessions
    and stateful user context)
-   ```Decouple the components```
-   ```Implement elasticity``` (ensuring that the cost of automating scale-up and
    scale-down is as small as possible)
-   ```Think parallel```
-   ```Security at every level```
