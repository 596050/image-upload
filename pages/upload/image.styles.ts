import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadArticle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    uploadForm: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      '& > input[type="file"]': {
        display: "none",
      },
      paddingTop: theme.spacing(1),
    },
    disabled: ({ loading }: { loading: boolean }) => ({
      pointerEvents: loading ? "none" : undefined,
      backgroundColor: loading
        ? theme.palette.action.disabledBackground
        : undefined,
    }),
    uploadLabel: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: theme.custom.border,
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
      cursor: "pointer",
      boxShadow: theme.custom.boxShadow,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        backgroundColor: theme.custom.hover,
      },
      "&:active": {
        backgroundColor: theme.custom.active,
      },
    },
    imageUploadSection: {
      paddingTop: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    },
    uploadedListItem: {
      padding: `${theme.spacing(1)}px 0`,
    },
    listItemText: {
      overflowWrap: "anywhere",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    uploadedMessage: {
      display: "none",
      height: "30px",
      width: "100%",
      background: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "-30px",
      left: 0,
    },
  })
);
