# Module 2: Input and Output with Streams and Files

**Streams in Java represent and ordered sequence of data.**

* Provides a common I/O model
* Abstracts details of underlying source or destination
* Stream types are unidirectional.  You will either _Read from_ or _Write to_ 

**There are 2 categories of streams.  Streams are either:**

* Byte streams, interacting as binary data `01101110`
    * Base class to _Read from_ a binary stream is **InputStream**
* Text streams, interacting as Unicode characters
    * Base class to _Read from_ a text stream is **Reader**