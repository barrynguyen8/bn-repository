import React, { Component } from 'react'
import { GridList, GridListTile, GridListTileBar, Button, IconButton } from '@material-ui/core';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'

class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }
    handleOpen = img => {
        this.setState({ open: true, currentImg: img });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    render() {
        let imageListContent;
        const images = this.props.images
        if (images) {
            imageListContent = (
                <GridList cols={4}>
                    {images.map(img => (
                        <GridListTile key={img.id}>
                            <img src={img.largeImageURL} alt="" />
                            <GridListTileBar title={img.tags} key={img.id} subtitle={
                                <span>
                                    Source: <strong>{img.user}</strong>
                                </span>
                            }
                                actionIcon={<IconButton onClick={() => this.handleOpen(img.largeImageURL)}><ZoomIn fontSize="large" style={{ fill: 'white' }} /></IconButton>}>

                            </GridListTileBar>

                        </GridListTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null;
        }
        return (
            <div>
                {imageListContent}
                <Dialog
                    open={this.state.open}>
                    <img src={this.state.currentImg} alt="" /><Button startIcon={<CloseIcon />} onClick={this.handleClose} variant="outlined" color="secondary">Close</Button>
                </Dialog>
            </div>
        )
    }
}

export default ImageResults

