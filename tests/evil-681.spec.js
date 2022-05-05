
  describe("some-evil-spec=681", () => {
    it("evil-block-681", () => {
      window.evil_681 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  