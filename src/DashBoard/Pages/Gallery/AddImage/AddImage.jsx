import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addFile, getAllFiles } from '../../../../redux/actions/gallery_actions'
import FileUploader from '../../../../utils/FileUploader/FileUploader'
import { FormBody } from './add.styles'

export default function AddImage() {
  const { register, handleSubmit, reset } = useForm()
  const MySwal = withReactContent(Swal)
  const dispatch = useDispatch()
  const [sending, setSending] = useState(null)
  const formRef = useRef(null)
  const postImg = useSelector((state) => state.file.fileUrl)

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'La publicación se ha actualizado correctamente!',
    })
  }

  const errorNotify = async () => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se ha podido guardar cambios!',
    })
  }

  const handleData = async (data) => {
    const post = {
      title: data.title,
      subtitle: data.subtitle,
      url: postImg,
      status: true,
      origin: 'images',
    }
    try {
      setSending(true)
      await dispatch(addFile(post)).finally(() => dispatch(getAllFiles()))
      // formRef.current.reset()
      return notification()
    } catch (error) {
      errorNotify()
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <h2>Agregar Imagen</h2>
      <FormBody>
        <form onSubmit={handleSubmit(handleData)}>
          <label>
            Titulo:
            <input {...register('title', { max: 40 })} />
          </label>
          <label>
            Subtitulo:
            <input {...register('subtitle', { max: 120 })} />
          </label>
          <FileUploader folder="gallery" />
          <button
            type="submit"
            className="dashBtn"
            disabled={sending ? true : false}
          >
            Agregar imagen
          </button>
        </form>
      </FormBody>
    </>
  )
}
