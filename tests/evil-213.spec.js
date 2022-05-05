
  describe("some-evil-spec=213", () => {
    it("evil-block-213", () => {
      window.evil_213 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  