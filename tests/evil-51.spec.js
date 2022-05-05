
  describe("some-evil-spec=51", () => {
    it("evil-block-51", () => {
      window.evil_51 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  