
  describe("some-evil-spec=928", () => {
    it("evil-block-928", () => {
      window.evil_928 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  