
  describe("some-evil-spec=721", () => {
    it("evil-block-721", () => {
      window.evil_721 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  