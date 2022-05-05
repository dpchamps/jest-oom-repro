
  describe("some-evil-spec=831", () => {
    it("evil-block-831", () => {
      window.evil_831 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  