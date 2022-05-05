
  describe("some-evil-spec=486", () => {
    it("evil-block-486", () => {
      window.evil_486 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  