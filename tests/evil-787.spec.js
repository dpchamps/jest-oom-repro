
  describe("some-evil-spec=787", () => {
    it("evil-block-787", () => {
      window.evil_787 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  