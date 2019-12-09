import React from 'react';
import { withFirebase } from '../Firebase';

type Props = {
    firebase: any
};

const SignOutButton = ({ firebase }: Props) => (
    <button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);
export default withFirebase(SignOutButton);