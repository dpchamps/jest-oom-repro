
  describe("some-evil-spec=816", () => {
    it("evil-block-816", () => {
      window.evil_816 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  