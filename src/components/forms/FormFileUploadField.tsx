"use client"

import type React from "react"
import { useRef, useState } from "react"
import { useController, type Control, type FieldPath, type FieldValues } from "react-hook-form"

import { FileText, Trash2, X } from "lucide-react"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"

interface FormFileUploadFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
  control: Control<TFieldValues>
  label?: string
  accept?: string
  placeholder?: string
  className?: string
  buttonText?: string
  disabled?: boolean
  showProgress?: boolean
  required?: boolean
  multiple?: boolean
  maxFiles?: number
  maxPreviewFiles?: number
}

export function FormFileUploadField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  accept = "*/*",
  placeholder = "No file chosen",
  className = "",
  buttonText = "Choose File",
  disabled = false,
  showProgress = true,
  required = false,
  multiple = false,
  maxFiles = 10,
  maxPreviewFiles = 4,
}: FormFileUploadFieldProps<TFieldValues, TName>) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required ? `${label || "File"} is required` : false,
    },
  })

  const handleButtonClick = () => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    if (multiple) {
      const fileArray = Array.from(files).slice(0, maxFiles)
      onChange(fileArray)
    } else {
      const file = files[0] || null
      onChange(file)
    }

    if (files.length > 0 && showProgress) {
      setIsUploading(true)
      setUploadProgress(0)

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  const handleClearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onChange(multiple ? [] : null)
    setUploadProgress(0)
    setIsUploading(false)
  }

  const handleRemoveFile = (indexToRemove: number) => {
    if (multiple && Array.isArray(value)) {
      const updatedFiles = value.filter((_:any, index:number) => index !== indexToRemove)
      onChange(updatedFiles)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getDisplayText = () => {
    if (multiple && Array.isArray(value)) {
      return value.length > 0 ? `${value.length} file${value.length > 1 ? "s" : ""} selected` : placeholder
    }
    return value ? value.name : placeholder
  }

  const hasFiles = multiple ? Array.isArray(value) && value.length > 0 : !!value

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <Label className="text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}

      <div className="flex items-center   w-full">
        <button
          type="button"
          className="h-9 text-sm cursor-pointer bg-black text-white hover:bg-gray-800 border-black flex-shrink-0 px-3 rounded-tl-2xl rounded-bl-2xl"
          onClick={handleButtonClick}
          disabled={disabled}
        >
          {buttonText}
        </button>
        <div
          className={`flex-1 min-w-0 border border-dashed rounded rounded-tr-2xl rounded-br-2xl px-3 py-2 h-9 flex items-center ${
            error ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
        >
          <span className="text-sm text-gray-500 truncate">{getDisplayText()}</span>
        </div>
        
      </div>

      {error && <p className="text-sm text-red-600">{error.message}</p>}

      {hasFiles && (
        <>
          {multiple && Array.isArray(value) ? (
            // Multiple files preview with thumbnails
            <div className="flex gap-2 flex-wrap">
              {value.slice(0, maxPreviewFiles).map((file:any, index:number) => (
                <div
                  key={index}
                  className="relative w-20 h-20 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center group"
                >
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file) || "/placeholder.svg"}
                      alt={file.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <FileText className="w-8 h-8 text-gray-400" />
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-gray-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveFile(index)}
                    disabled={disabled}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
              {value.length > maxPreviewFiles && (
                <div className="w-20 h-20 border border-gray-200 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">{value.length - maxPreviewFiles}+</span>
                </div>
              )}
            </div>
          ) : (
            // Single file preview
            <div className="border border-gray-200 rounded-lg p-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{value.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(value.size)}</p>
                  {(isUploading || uploadProgress > 0) && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className="bg-black h-1 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="w-4"></div>
                        <span className="text-xs text-gray-500">{uploadProgress}%</span>
                      </div>
                    </div>
                  )}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 flex-shrink-0"
                  onClick={handleClearFile}
                  disabled={disabled}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={handleFileChange}
        disabled={disabled}
        
      />
    </div>
  )
}
