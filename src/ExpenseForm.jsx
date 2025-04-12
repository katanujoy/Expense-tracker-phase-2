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
        onSubmit(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name="description"
              type="text"
              placeholder="Expense Description"
            />
            <ErrorMessage name="description" component="div" className="error" />
          </div>
          <div>
            <Field
              name="amount"
              type="number"
              placeholder="Amount"
            />
            <ErrorMessage name="amount" component="div" className="error" />
          </div>
          <div>
            <Field
              name="category"
              type="text"
              placeholder="Category"
            />
            <ErrorMessage name="category" component="div" className="error" />
          </div>

          <button type="submit">Add Expense</button>
        </Form>
      )}
    </Formik>
  );
}

export default ExpenseForm;