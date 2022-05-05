
  describe("some-evil-spec=612", () => {
    it("evil-block-612", () => {
      window.evil_612 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  