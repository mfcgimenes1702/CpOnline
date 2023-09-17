"use client"

import { destroy } from '@/actions/CadastroAluno';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import * as React from 'react';


export default function DropMenu({aluno}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEdit = () => {
    router.push("/aluno/+ aluno.id +/edit")
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    const response = destroy(aluno.id)
    
    if(response?.error)
      toast.error(response.error, {style: {
        boarderRadius: '8px',
        background: '#333',
        color: '#fff',
      }})

    else{
        toast.sucess("Aluno apagado com sucesso! ", {style: {
          boarderRadius: '8px',
          background: '#333',
          color: '#fff',
        }})
      }

      setAnchorEl(null);
    
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
        <AlertDialog>
          <AlertDialogTrigger>
          <MenuItem >Excluir</MenuItem>
          </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza que quer apagar o aluno? </AlertDialogTitle>
                <AlertDialogDescription>
                Ao apagar o aluno, todos os dados serão perdidos. Essa ação não poderá ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick ={handleDelete} >Sim, pode apagar esse aluno</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        
        <MenuItem onClick={handleEdit}>Editar</MenuItem>
        </Menu>
    </div>
  )
      }