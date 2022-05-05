
  describe("some-evil-spec=314", () => {
    it("evil-block-314", () => {
      window.evil_314 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  