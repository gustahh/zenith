import React from 'react'
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Tiptap() {

    const extensions = [
        StarterKit,
    ]

    const { id } = useParams();
    const [texto, setTexto] = useState('');
    let meuTexto = localStorage.getItem('content');
    const [content, setContent] = useState('');    
    
    const fetchData = async () => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Pega informações da nota
        axios.get(`http://localhost:3000/notas/${id}`)
            .then((res) => {
                setTexto(res.data.results[0].texto);
                setContent(res.data.results[0].texto);
                
                //localStorage.setItem('content', res.data.results[0].texto);
            })
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: 'outline-none',
            }
        },
        onUpdate: ({ editor }) => {
            const novoTexto = editor.getHTML();
            //setContent(novoTexto);
            //console.log(novoTexto)
            
            axios.put(`http://localhost:3000/notas/edit/texto/${id}`, {
                texto: novoTexto
            })
                .then((res) => {
                    console.log('texto adicionado');
                    if (localStorage.getItem('content')) {
                        // Se o item já existe, substitui o valor
                        localStorage.setItem('content', novoTexto);
                        
                    } 
                })
                .catch((error) => {
                    console.error('Erro ao buscar cores:', error);
                });
        }
    })

    useEffect(() => {
        if (editor && content) {
            editor.commands.setContent(content, false);
        }
    }, [content, editor]);

    return (
        <>
            <EditorContent editor={editor} />
        </>

    )
}

export default Tiptap