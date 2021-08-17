import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _z74vJ3WPk14BsUBYgF3Jnt2IMFBeiupSOsNTFBulSc'
    }
});