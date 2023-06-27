import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";

// Task Manager Component
const TaskManager = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [token, setToken] = useState("");

  // Simulated login using reqres.in API
  const login = (email, password) => {
    // Make a POST request to authenticate the user
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the login status and store the user token
        if (data.token) {
          setIsLoggedIn(true);
          setToken(data.token); // Store the user token
          // Redirect to task dashboard
          fetchTasks(data.token);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setIsLoggedIn(false);
      });
  };

  // Fetch tasks using reqres.in API
  const fetchTasks = (token) => {
    // Make a GET request to retrieve tasks
    fetch("https://reqres.in/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.tasks) {
          setTasks(data.tasks);
        }
      })
      .catch((error) => {
        console.error("Fetch tasks error:", error);
      });
  };

  // Create a new task using reqres.in API
  const createTask = () => {
    // Make a POST request to create a new task
    fetch("https://reqres.in/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        task: newTask,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.task) {
          // Add the new task to the existing tasks list
          setTasks([...tasks, data.task]);
          // Clear the input field
          setNewTask("");
        }
      })
      .catch((error) => {
        console.error("Create task error:", error);
      });
  };

  useEffect(() => {
    // Simulate automatic login on component mount
    login("user@example.com", "password");
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Task Manager</h1>
          <div>
            <h2>Your Tasks:</h2>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.task}</li>
              ))}
            </ul>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task"
            />
            <button onClick={createTask}>Create Task</button>
          </div>
        </div>
      ) : (
        <Login onLogin={login} />
      )}
    </div>
  );
};

export default TaskManager;