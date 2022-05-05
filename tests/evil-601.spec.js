
  describe("some-evil-spec=601", () => {
    it("evil-block-601", () => {
      window.evil_601 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  