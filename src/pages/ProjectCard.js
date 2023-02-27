import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import Button from "../components/UI/Button";
import { projectsActions } from "../store/projects-slice";
import classes from "./ProjectCard.module.css";

const ProjectCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const projectDetails = useSelector((state) =>
    state.projects.items.find((item) => item.id === params.id)
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedItem = {
      id: params.id,
      projName: event.target.projName.value,
      projDesc: event.target.projDesc.value,
      customer: event.target.customer.value,
      year: event.target.year.value,
      styled: false,
    };
    console.log("gggg", updatedItem);
    dispatch(projectsActions.fullItemEdit(updatedItem));
    navigate("..");
  };
  const cancelHandler = () => {
    navigate("..");
  };

  return (
    <Form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="projName">Project Name</label>
        <input
          id="projName"
          type="text"
          name="projName"
          required
          defaultValue={projectDetails ? projectDetails.projName : ""}
        />
      </p>
      <p>
        <label htmlFor="projDesc">Project Description</label>
        <input
          id="projDesc"
          type="text"
          name="projDesc"
          required
          defaultValue={projectDetails ? projectDetails.projDesc : ""}
        />
      </p>
      <p>
        <label htmlFor="customer">Customer</label>
        <input
          id="customer"
          type="text"
          name="customer"
          required
          defaultValue={projectDetails ? projectDetails.customer : ""}
        />
      </p>
      <p>
        <label htmlFor="year">Project Year</label>
        <input
          id="year"
          type="text"
          name="year"
          required
          defaultValue={projectDetails ? projectDetails.year : ""}
        />
      </p>

      <div>
        <Button type="button" onClick={cancelHandler}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </Form>
  );
};

export default ProjectCard;
