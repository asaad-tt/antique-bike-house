import React from "react";

const Blog = () => {
  return (
    <div className="mb-20">
      <h2 className="text-center py-10  text-3xl font-bold">
        Question and Answer section
      </h2>
      {/* first question  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: <br />
            1. Local state <br />
            2. Global state <br />
            3. Server state <br />
            4. URL state <br />
          </p>
        </div>
      </div>

      {/* Second question  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object. <br />
            When it comes to inheritance, JavaScript only has one construct:
            objects. Each object has a private property which holds a link to
            another object called its prototype. That prototype object has a
            prototype of its own, and so on until an object is reached with null
            as its prototype. By definition, null has no prototype, and acts as
            the final link in this prototype chain. It is possible to mutate any
            member of the prototype chain or even swap out the prototype at
            runtime, so concepts like static dispatching do not exist in
            JavaScript.
          </p>
        </div>
      </div>

      {/* Third question  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. <br />
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
            <br />
          </p>
        </div>
      </div>

      {/* fourth question  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>
            <strong>Angular:</strong> AngularJS was developed in 2009 by Google.
            The first version was Angular.JS. Angular is currently known as a
            JavaScript framework. Obviously, all significant Google projects
            have been developed with Angular. Angular.js is an MVC framework. A
            major disadvantage of Angular is that it uses a regular DOM, and
            thus, the entire tree structure of the HTML tags is updated, which
            massively impacts the loading time. Angular.js has its Ionic
            framework for mobile applications. <br />
            <strong>React:</strong> Facebook released React.js in March 2013 as
            a JavaScript library. Because React just provides one view, it is
            not appropriate for building an MVC architecture: you must solve the
            model and controller yourself. Besides this, there are only
            advantages and lots of advantages. One of the biggest of them is
            that React.js uses a virtual DOM that only compares the previous
            HTML code differences and only loads the different parts. This
            significantly impacts the loading times. In a positive way, of
            course. With React.js, you handle the markup and the logic in the
            same file, which means you can output variables in a view component
            (JSX). React offers a type of mobile solutions for applications
            called React-Native. <br />
            <strong>Vue:</strong> Vue.js is a JavaScript-based progressive
            framework for creating single-page applications. It was created with
            scalability and incrementality in mind, as well as ease of
            integration with other view layer frameworks. Vue is built from the
            bottom up to be progressively adaptable, unlike other monolithic
            frameworks. The core library focuses solely on the view layer, and
            it???s simple to use and connect with other libraries or applications.
            This framework???s fast learning angle is almost a trademark. It???s a
            flexible framework that may be used as a library or a full-fledged
            framework for developing large web applications. Vue.js combines the
            useful principles of the Angular and React frameworks and presents
            them in a minimalistic modern style. Web developers use Vue.js to
            create frontend user interfaces for web-based and hybrid mobile
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
