
  describe("some-evil-spec=241", () => {
    it("evil-block-241", () => {
      window.evil_241 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  