
  describe("some-evil-spec=79", () => {
    it("evil-block-79", () => {
      window.evil_79 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  