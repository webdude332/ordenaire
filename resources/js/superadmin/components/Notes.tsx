import React from 'react'
import IconButton from './ui/IconButton'

const Notes = () => {
  return (
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-xl mb-4 text-sm font-semibold text-gray-900">
                                Notes
                            </h3>
                            <div className="mb-4">
                                <textarea
                                    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-[#7AB621] focus:ring-[#7AB621]"
                                    rows={5}
                                    placeholder="The Business needs review"
                                ></textarea>
                            </div>
                            <IconButton>Update Note</IconButton>
                        </div>
  )
}

export default Notes