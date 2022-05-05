
  describe("some-evil-spec=958", () => {
    it("evil-block-958", () => {
      window.evil_958 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  