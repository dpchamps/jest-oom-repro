
  describe("some-evil-spec=923", () => {
    it("evil-block-923", () => {
      window.evil_923 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  