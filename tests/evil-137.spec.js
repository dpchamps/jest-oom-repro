
  describe("some-evil-spec=137", () => {
    it("evil-block-137", () => {
      window.evil_137 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  