import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

export default function FullFeaturedCrudGrid({ tokens }) {
  const [rows, setRows] = React.useState(tokens);
  const [rowModesModel, setRowModesModel] = React.useState({});

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = tokens.length + 1;
      // Set template data for a new project
      const emptyToken = {
        token_id: id,
        token_price: 0,
        ticker: "",
        name: "",
        description: "",
        token_status: "",
        token_twitter: "",
        token_telegram: "",
        token_website: "",
      };

      // We add an empty row to the grid
      // SET API create token

      setRows((oldRows) => [...oldRows, emptyToken]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    console.log(id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.token_id !== id));
    // API CALL
    console.log("HI");
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.token_id === newRow.token_id ? updatedRow : row)));
    // API CALL
    console.log("HI");
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: "token_id", headerName: "ID", width: 100, editable: false },
    { field: "token_price", headerName: "Price", width: 100, editable: true, type: "number" },
    {
      field: "token_max_amount",
      headerName: "Max Amount",
      width: 100,
      editable: true,
      type: "number",
    },
    { field: "token_address", headerName: "Address", width: 100, editable: true, type: "string" },
    { field: "ticker", headerName: "Ticker", width: 100, editable: true, type: "string" },
    { field: "name", headerName: "Name", width: 100, editable: true, type: "string" },
    { field: "description", headerName: "Description", width: 100, editable: true, type: "string" },
    { field: "token_status", headerName: "Status", width: 100, editable: true, type: "string" },
    { field: "token_twitter", headerName: "Twitter", width: 100, editable: true, type: "string" },
    { field: "token_telegram", headerName: "Telegram", width: 100, editable: true, type: "string" },
    { field: "token_website", headerName: "Website", width: 100, editable: true, type: "string" },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <DataGridPro
            getRowId={(row) => row.token_id}
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slots={{
              toolbar: EditToolbar,
            }}
            slotProps={{
              toolbar: { setRows, setRowModesModel },
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = (await axios.get("http://localhost:6000/api/tokens", { responseType: "json" })).data;
  const tokens = await res;
  console.log(tokens);
  return {
    props: {
      tokens: tokens.tokens,
    },
  };
};
