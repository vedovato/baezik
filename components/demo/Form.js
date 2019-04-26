import {Fragment} from 'react'
import {Button, FormField, TextInput} from 'grommet'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

// future content like seo or i18n
// inject custom or merge schemas?

const objectTemplate = {
  id: 'formId', // might be unique?
  config: {}, // options for hide/display tabs and general setup
  initialValues: [], // new empty or filled object
  validationSchema: {}, // yup schema object
  onSubmit: () => {}, // any function
}

const myForm = {
  id: 'firstForm', // might be unique?
  config: {
    width: 20,
    mediaGallery: false,
    fileUpload: false,
  },

  initialValues: [
    {
      title: 'heyo',
      slug: '',
      // content: '',
    },
  ],

  fieldSchema: [
    {
      key: 'title',
      type: 'text',
      placeholder: 'seu@email.aqui',
      label: 'Título da Postagem',
      help: 'yalp!',
      mediaField: false,
    },
    {
      key: 'slug',
      type: 'text',
      placeholder: 'utilize-este-formato',
      label: 'Slug (URL amigável)',
      help: 'There you go!',
    },
    // {
    //   key: 'content',
    //   type: 'editor',
    //   placeholder: 'Seja feliz meu consagrado!',
    //   label: 'Digita saporra tudo aí safado!',
    //   help: 'yalp!',
    //   mediaField: false,
    // },
  ],

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Título obrigatório'),
    slug: Yup.string().required('Slug obrigatório'),
    // content: Yup.string(),
  }),

  onSubmit: (values, actions) => {
    console.warn('XXXDDSDASDASDASD')
    console.warn('values', values)
    console.warn('actions', actions)
    return false
  },
}

const createForm = ({
  fieldSchema,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            handleBlur,
            handleChange,
            isSubmitting,
            handleSubmit,
            handleReset,
          } = props

          // isSubmitting && <p>Aguarde....</p>

          return (
            <Fragment>
              {/*createFields(
                fieldSchema, // whole fields array
                {values, touched, errors, dirty}, // data
                {handleChange, handleBlur} // actions
              )*/}

              <Fragment>
                <Field type="text" name={'title'} />
                <ErrorMessage name={'title'} component="div" />
              </Fragment>

              <Button
                secondary
                type="reset"
                label="Resetar"
                onClick={handleReset}
              />

              <Button
                primary
                type="submit"
                label="Enviar"
                onClick={handleSubmit}
              />
            </Fragment>
          )
        }}
      </Formik>
    </Fragment>
  )
}

const createFields = (schema, formValues, formActions) => {
  return schema.map((item, key) => {
    let wtf = item.key
    // let fieldValue = formValues.values[wtf]
    // let fieldError = formValues.errors[wtf]
    // let fieldTouched = formValues.touched[wtf]
    // let fieldDirty = formValues.dirty[wtf]

    return (
      <Fragment key={key}>
        <Field type="text" name={wtf} />
        <ErrorMessage name={wtf} component="div" />
      </Fragment>
    )

    // return (
    //   <FormField
    //     key={key}
    //     htmlFor={item.key}
    //     label={item.label}
    //     // help="whats that?"
    //     error={what ? fieldError : 'xeh'}>
    //     <TextInput
    //       id={item.key}
    //       name={item.key}
    //       // placeholder="Heyo"
    //       value={fieldValue}
    //       onSelect={formActions.handleBlur}
    //       onChange={formActions.handleChange}
    //     />
    //   </FormField>
    // )
  })
}

const DemoForm = () => (
  <Fragment>
    <h1>Novo form</h1>
    {createForm(myForm)}
  </Fragment>
)

export default DemoForm
