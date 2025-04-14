import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ExpenseForm({ onSubmit }) {
  const validationSchema = Yup.object({
    description: Yup.string().required('Description is required'),
    amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
    category: Yup.string().required('Category is required'),
  });

  return (
    <Formik
      initialValues={{
        description: '',
        amount: '',
        category: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values); // Calls the onSubmit function passed from App
      }}
    >
      {() => (
        <Form>
          <div className="form-field">
            <label htmlFor="description">Expense </label>
            <Field
              name="description"
              type="text"
              placeholder="Expense"
              className="input-field"
            />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <div className="form-field">
            <label htmlFor="amount">Amount</label>
            <Field
              name="amount"
              type="number"
              placeholder="Amount"
              className="input-field"
            />
            <ErrorMessage name="amount" component="div" className="error" />
          </div>

          <div className="form-field">
            <label htmlFor="category">Category</label>
            <Field as="select" name="category" className="input-field">
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </Field>
            <ErrorMessage name="category" component="div" className="error" />
          </div>

          <button type="submit" className="submit-btn">Add Expense</button>
        </Form>
      )}
    </Formik>
  );
}

export default ExpenseForm;
