import { selectSession } from '@/feacture/sessionslice';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
export interface ProtectedRoutesProps { }

export interface ProtectedRoutesProps {
    redirectTo: string;
    children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = (props) => {
    const router = useRouter();
    const session = useSelector(selectSession);


    useEffect(() => {
        //localStorage.token
        if (!session.token) {
            router.push(props.redirectTo)
        }
    }, [])

    return <>{props.children}</>;
};

export default ProtectedRoutes;
