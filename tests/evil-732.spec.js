
  describe("some-evil-spec=732", () => {
    it("evil-block-732", () => {
      window.evil_732 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  