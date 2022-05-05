
  describe("some-evil-spec=215", () => {
    it("evil-block-215", () => {
      window.evil_215 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  