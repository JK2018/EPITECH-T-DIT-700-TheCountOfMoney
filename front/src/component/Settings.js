import React, {useState} from 'react'
import { TextField, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCryptoDialog from './AddCryptoDialog';

const Settings = () => {

    const [rssFeeds, setFeeds] = useState([]);
    const [cryptos, setCryptos] = useState([]);
    const [inputErrors, setErrors] = useState([]);
    const [openDialog, setOpen] = useState(false);

    function addFeed() {
        var rssInput = document.getElementById('rss-input');
        
        if (!rssInput.value || rssInput.value.length === 0 || rssInput.value.trim().length === 0) {
            var errors = [...inputErrors];
            errors["rss"] = "Invalid input";
            setErrors(errors);
            return false;
        }

        var rssFeedsRef = [...rssFeeds];
        rssFeedsRef.push(rssInput.value);
        setFeeds(rssFeedsRef);
        
        rssInput.value = "";

        return true;
    }

    function removeFeed(value) {
        var rssFeedsRef = [...rssFeeds];
        rssFeedsRef = rssFeedsRef.filter(item => item !== value);
        setFeeds(rssFeedsRef);
    }

    function handleKeyPress(e, input) {
        if (e.key === "Enter") {
            if (input === "feed") {
                addFeed();
            }
        }
    }

    function handleClickDialog() {
        setOpen(!openDialog);
    };

    return (
        <div className="admin-settings">
            <h1>RSS Feeds</h1>
            <FormGroup className="inline-form">
                <TextField                    
                    className="inline-input"
                    id="rss-input"
                    label="Add RSS Feed URL"
                    error={inputErrors.rss && inputErrors.rss.length !== 0 ? true : false }
                    helperText= {inputErrors.rss}
                    onKeyPress={(e) => handleKeyPress(e, "feed")}
                />
                <IconButton 
                    className="inline-button" 
                    color="primary" 
                    aria-label="add to shopping cart" 
                    onClick={addFeed}
                >
                    <AddCircleIcon/>
                </IconButton>
            </FormGroup>
            <List className="list">
                {rssFeeds.map((value) =>
                    React.cloneElement(
                        <ListItem>
                            <ListItemText primary={value}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeFeed(value)} >
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>,
                        {key: value}
                    )
                )}
            </List>
            <h1>Crypto currencies</h1>
            <Button variant="outlined" color="primary" onClick={handleClickDialog}>
                Add crypto currency
            </Button>
            <AddCryptoDialog openDialog={openDialog}  handler={handleClickDialog}/>
            <List className="list">
                {cryptos.map((value) =>
                    React.cloneElement(
                        <ListItem>
                            <ListItemText primary={value}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeFeed(value)} >
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>,
                        {key: value}
                    )
                )}
            </List>
        </div>
    );
}
export default Settings;