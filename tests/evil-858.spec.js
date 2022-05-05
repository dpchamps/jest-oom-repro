
  describe("some-evil-spec=858", () => {
    it("evil-block-858", () => {
      window.evil_858 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  