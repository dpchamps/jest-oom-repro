
  describe("some-evil-spec=303", () => {
    it("evil-block-303", () => {
      window.evil_303 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  