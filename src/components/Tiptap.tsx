import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Tiptap: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [texto, setTexto] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    try {
      const response = await axios.get(`http://localhost:3000/notas/${id}`);
      const { texto } = response.data.results[0];
      setTexto(texto);
      setContent(texto);
    } catch (error) {
      console.error('Erro ao buscar nota:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const novoTexto = editor.getHTML();

      axios.put(`http://localhost:3000/notas/edit/texto/${id}`, {
        texto: novoTexto,
      })
        .then(() => {
          console.log('Texto adicionado');
          if (localStorage.getItem('content')) {
            localStorage.setItem('content', novoTexto);
          }
        })
        .catch((error) => {
          console.error('Erro ao atualizar nota:', error);
        });
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
