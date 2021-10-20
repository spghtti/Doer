function createTask(title, dueDate, priority, project) {
  return {
    title: title,
    dueDate: dueDate,
    priority: priority,
    project: project,
  };
}

export { createTask };
