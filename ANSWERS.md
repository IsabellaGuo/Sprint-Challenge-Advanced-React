- [ ] Why would you use class component over function components (removing hooks from the question)?

  Class components have more control over state. In the lifecycle, You have control over what happens when the component mounts, updates and unmounts.   

- [ ] Name three lifecycle methods and their purposes.

  componentDidMount: Part of the mounting phase, the method gets invoked as soon as the render() method is called initially. Creates the app/loads components. 

  componentDidUpdate: This method is not called for the first render() like componentDidMount. Instead, it is invoked immediately after an update to the state occurs. 

  componentWillUnmount: Invoked immediately before a component unmounts. It is in the method that you will cleanup any ongoing tasks.

- [ ] What is the purpose of a custom hook?

Reusable and avoid repeating ourselves.

- [ ] Why is it important to test our apps?

To find erros, reduce the risk of regressions, make us think about the edge cases.