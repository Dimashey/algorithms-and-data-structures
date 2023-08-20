# Queue

## Basic operations

- `enqueue()` the element is inserted into the queue at the end
- `dequeue()` removes the element from the front of the queue and returns it
- `front()` returns the element at the front without removing it
- `rear()` returns the element at the rear without removing it
- `isEmpty()` indicates whether the queue is empty or not
- `size()` returns the size of the queue i.e. the total number of elements presents in the queue

## Implementation of Queue

There are two types of implementation of queue

- Using an array
- Using a linked list

### Queue using array

**Pros**: the easiest way.
**Cons**: when selecting from the queue, you need to shift all elements.

**Time Complexity**: *O(n)*

### Queue using circular array

**Time Complexity**: *O(1)*, The time complexity of both operations `enqueue()` and `dequeue()` is *O(1)*

### Queue using linked list

**Time Complexity**: *O(1)*, The time complexity of both operations `enqueue()` and `dequeue()` is *O(1)* as it only changes a few pointers in both operations

## Type of Queues

- Simple Queue:
**Simple Queue** also known as a linear queue is the most basic version of queue. Here, the insertions of an element i.e., `Enqueue()` operation takes place at the rear end and the removal of an element i.e. the `Dequeue()` operation takes place at the front end
- Circular Queue:
In a circular queue, the element of the queue act as a circular ring. The working of a circular queue is like the linear queue expect for the fact that the last element is connected to the first element. Its advantage is that the memory is utilized in a better way. This is because if there is an empty space i.e, if no element is present at a certain position in the queue, then an element can be easily added ad that position.
- Priority Queue:
This queue is a special type of queue. Its peculiarity is that it arranges the elements in a queue based on some priority. The priority can be something where the element with the highest value has the priority, so its creates a queue with decreasing order of values. The priority can also be such that the element with the lowest values gets the highest priority so in turn it creates a queue with increasing order of values.
- Dequeue:
**Dequeue** is also known as Double Ended Queue. As the name suggests double ended, it means that an element can be inserted or removed from both ends of the queue, unlike the other queues in which it can be done only from one end. Because of this property, it may not obey the First In First Out Property

## Application(Usage) of Queue

- **Job Scheduling**. The jobs that are to be executed by the computer are scheduled to be executed one by one. There are many jobs like keyboard press, mouse click, etc. in the system. These jobs are brought into the main memory. These jobs are assigned to the processor one by one which is organized using a queue.
- **Multiprogramming**. If there are multiple programs in the main memory, then it is called multiprogramming. The various programs in the main memory are organized as queues and the queues formed are called 'Ready Queue'. The processor will execute the programs by accessing them from the cache memory. This is done for their simultaneous execution.
- **For Operation on Data Structure**. Certain operations like "tree traversal" and "Breadth-first search uses a queue for graph traversal" involve the use of queues. These are some non-linear data structures. The sequence of traversal of inputs is set using queues.
- **Access to Shared Resources**. In network system, the service is asked from a single resource simultaneously by various workstations or machines. The request are generated fractions of a second, which is very fast. Although, there's always some time difference in requests generated. This situation is maintained by implementing a queue in the device at the server.
- **Multilevel Queue Scheduling**. Here, the jobs are allocated and divided into multiple queues. Every process is assigned a unique priority based on which the system executes the processes. This system has one limitation which is the lower-priority processes may be preempted by a higher priority processes.
- As a Buffer Space.
- Queue can also be used in the simulation.
- In the Computer Network queue applications are in Routers and in the Mail queue.
- Queue applications are also in the field of Handling website traffic.
- Applications of queue are also in the maintaining the playlist in the media player.
