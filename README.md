# Hw1

## 1 Brief Introduction to Vue.js
    Vue.js (commonly referred to as Vue; pronounced /vjuː/, like view) is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is simplified with Vue because it is designed to be incrementally adoptable. Vue can also function as a web application framework capable of powering advanced single-page applications.

### 1.1 History
    Vue was created by Evan You after working for Google using AngularJS in a number of projects. He later summed up his thought process, 
    > "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight." 
    Vue was originally released in February 2014. 

### 1.2 Features
#### 1.Templates
    Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. All Vue templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers. Under the hood, Vue compiles the templates into virtual DOM render functions. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes. 
    In Vue, you can use the template syntax or choose to directly write render functions using JSX. In order to do so just replace the template option with a render function. Render functions open up possibilities for powerful component-based patterns — for example, the new transition system is now completely component-based, using render functions internally.